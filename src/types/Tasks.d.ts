interface Prescription {
    id: number;
    patient_id: number;
    medicine_id: number;
    quantity: number;
    remaining: number;
    created_at: string; // Assuming ISO 8601 format for timestamp
    updated_at: string; // Assuming ISO 8601 format for timestamp
    medicine: Medicine;
}

interface Medicine {
    id: number;
    dci: string;
    brand: string;
    dosage: string;
    cond: number;
    created_at: string; // Assuming ISO 8601 format for timestamp
    updated_at: string; // Assuming ISO 8601 format for timestamp
}

interface Task {
    id: number;
    validated: number;
    date: string; // Assuming ISO 8601 format for timestamp
    prescription_id: number;
    created_at: string; // Assuming ISO 8601 format for timestamp
    updated_at: string; // Assuming ISO 8601 format for timestamp
    prescription: Prescription;
}
