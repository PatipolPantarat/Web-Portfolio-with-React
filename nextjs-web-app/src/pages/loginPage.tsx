import CustomInput from "@/components/input";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <h1>Login Page</h1>
      <br />
      <CustomInput type="text" />
      <br />
      <CustomInput type="password" />
    </div>
  );
}
