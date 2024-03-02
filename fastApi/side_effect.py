from fastapi import FastAPI, Query
import openai
import ast
import json
from fastapi.middleware.cors import CORSMiddleware

OPENAI_API_KEY = "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"

openai.api_key = OPENAI_API_KEY

app = FastAPI(
    title="Medication Side Effects API",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace ["*"] with specific origins if needed
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


def get_response_openai(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            # n=1,
            # top_p=1,
            # frequency_penalty=0,
            # presence_penalty=0,
            messages=[
                {"role": "system", "content": "Given a list of medication names, generate a dictionary where each key is a medication name and its value is a list of all side effects associated with that medication, make sure to be compatible with government data."},
                {"role": "user", "content": prompt},
            ],
        )
        print("OpenAI Response:", response)
    except Exception as e:
        print("Error in creating campaigns from OpenAI:", str(e))
        return {"error": "Failed to generate response from OpenAI"}
    return response["choices"][0]["message"]["content"]


@app.get(
    "/medication-side-effects/",
    tags=["APIs"],
    response_model=dict,
)
def medication_side_effects(liste_nom_medicament: str = Query(..., title="List of Medication Names", description="Provide a comma-separated list of medication names")):
    medication_list = liste_nom_medicament.split(",")
    prompt = ", ".join(medication_list)
    response = get_response_openai(prompt)
    try:
        result_dict = ast.literal_eval(response)
    except ValueError:
        return {"error": "Failed to parse OpenAI response"}
    return result_dict





def get_med_info_openai(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            # n=1,
            # top_p=1,
            # frequency_penalty=0,
            # presence_penalty=0,
            messages=[
                {"role": "system", "content": "Given a list of medication names, generate a dictionary where each key is a medication name and its value is a small discription associated with that medication. the discription should be in french."},
                {"role": "user", "content": prompt},
            ],
        )
        print("OpenAI Response:", response)
    except Exception as e:
        print("Error in creating campaigns from OpenAI:", str(e))
        return {"error": "Failed to generate response from OpenAI"}
    return response["choices"][0]["message"]["content"]


@app.get(
    "/medication-info/",
    tags=["APIs"],
    response_model=dict,
)
def medication_info(liste_nom_medicament: str = Query(..., title="List of Medication Names", description="Provide a comma-separated list of medication names")):
    medication_list = liste_nom_medicament.split(",")
    prompt = ", ".join(medication_list)
    response = get_med_info_openai(prompt)
    try:
        result_dict = ast.literal_eval(response)
    except ValueError:
        return {"error": "Failed to parse OpenAI response"}
    return result_dict

def has_relation_openai(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": """Given a list of medication names and a side effect, determine if there is a relation between the side effect and any of the medications. Output a boolean indicating if there is a relation, along with the name of the medication causing the side effect if the relation is true, or a message indicating no relation. Output should be a key value {
    "has_relation": boolean,
    "related_medication": "medication_name" (if has_relation is true),
    "message": "write a small message "
}"""},
                {"role": "user", "content": prompt},
            ],
        )
    except Exception as e:
        print("Error in creating campaigns from OpenAI:", str(e))
        return {"error": "Failed to generate response from OpenAI"}
    return response["choices"][0]["message"]["content"]


@app.get(
    "/has_relation/",
    tags=["APIs"],
    response_model=dict,
)
def has_relation(liste_nom_medicament: str = Query(..., title="List of Medication Names", description="Provide a comma-separated list of medication names"),
                side_effect: str = Query(..., title="Side Effect", description="Specify the side effect")):
    medication_list = liste_nom_medicament.split(",")
    prompt = json.dumps({"liste_nom_medicament": medication_list, "side_effect": side_effect})
    response = has_relation_openai(prompt)
    try:
        result_dict = json.loads(response)
    except ValueError:
        return {"error": "Failed to parse OpenAI response"}
    return result_dict


