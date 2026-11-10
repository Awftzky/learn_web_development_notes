import { zodResolver } from "@hookform/resolvers/zod";
import { Repeat } from "lucide-react";
import { useForm } from "react-hook-form";
import { superRefine, z } from "zod";

// type RegisterFormSchema = {
//   username: string;
//   password: string;
// };

const registerFormSchema = z.object({
  username: z.string().min(3).max(10),
    password: z.string().min(8),
    RepeatPassword: z.string(),
  age: z.coerce.number().min(18),
}).superRefine((arg, ctx) => { 
    if (arg.password !== arg.RepeatPassword) { 
        ctx.addIssue({
            code: "custom",
            path: ["RepeatPassword"],
            message: "Password harus sama!"
        })
    }
});

type RegisterFormInput = z.input<typeof registerFormSchema>;
type RegisterFormOutput = z.output<typeof registerFormSchema>;

const RHFPage = () => {
  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleUserRegister = (values: RegisterFormInput) => {
    alert(
      `Form Submitted with Email: ${values.username} And Password : ${values.password}`,
    );
  };
  return (
    <div>
      <h1>RHF Page</h1>

      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={form.handleSubmit(handleUserRegister)}
      >
        <label>
          Username :
          <input type="text" {...form.register("username")} />
        </label>
        <span>{form.formState.errors.username?.message}</span>

        <label>
          Password :
          <input type="password" {...form.register("password")} />
        </label>
        <span>{form.formState.errors.password?.message}</span>

        <label>
          Age :
          <input type="number" {...form.register("age")} />
        </label>
        <span>{form.formState.errors.age?.message}</span>

        <button type="submit" style={{ width: "fit-content", margin: "auto" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RHFPage;
