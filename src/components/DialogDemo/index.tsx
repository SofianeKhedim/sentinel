import { useAddDoctorMutation } from '@/app/backend/endpoints/doctors';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormikProvider, useFormik } from 'formik';
import { toast } from 'sonner';

const inputs = [
  {
    required: true,
    type: 'name',
    id: 'name',
    name: 'name',
    label: 'name',
    autoFocus: true,
  },
  {
    required: true,
    name: 'hospital',
    placeholder: 'hospital',
    type: 'hospital',
    id: 'hospital',
    label: 'hospital',
  },
  {
    required: true,
    name: 'cellphone',
    placeholder: 'cellphone',
    type: 'cellphone',
    id: 'cellphone',
    label: 'cellphone',
    autoComplete: 'cellphone',
  },
  {
    required: true,
    name: 'location',
    placeholder: 'location',
    type: 'location',
    id: 'location',
    label: 'location',
    autoComplete: 'location',
  },
];

export function DialogDemo() {
  const [addDoctor, { isLoading }] = useAddDoctorMutation();
  const formik = useFormik<Doctor>({
    initialValues: {
      name: '',
      hospital: '',
      location: '',
      cellphone: '',
    },
    validateOnChange: true,
    onSubmit: (body: Doctor) => {
      addDoctor(body)
        .unwrap()
        .then((response) => {
          console.log(response);
          toast.success('Doctor added successfully');
        })
        .catch(() => {
          toast.error("Couldn't add doctor, please try again.");
        });
    },
  });
  //   const { errors, touched, getFieldProps, handleSubmit } = formik;
  const { getFieldProps, handleSubmit } = formik;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute bottom-3 w-[90%] py-6 text-lg">
          Add Doctor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Doctor</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {inputs.map(({ name, type = 'text', label, ...props }, i) => (
                <div className="grid gap-2" key={i}>
                  <Label htmlFor={name}>{label}</Label>
                  <Input
                    type={type}
                    {...props}
                    //   error={
                    //     touched[name] && errors[name] ? errors[name] : undefined
                    //   }
                    {...getFieldProps(name)}
                  />
                </div>
              ))}
            </div>
            <DialogFooter className='mt-4'>
              {!isLoading ? (
                <Button type="submit" className="w-full">
                  Add
                </Button>
              ) : (
                <Button
                  disabled
                  type="submit"
                  className="w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </Button>
              )}
            </DialogFooter>
          </Form>
        </FormikProvider>
      </DialogContent>
    </Dialog>
  );
}
