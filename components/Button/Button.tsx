export interface IButton {
  sampleTextProp: string;
}

const Button = ({ sampleTextProp }: IButton) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-white">{sampleTextProp}</h1>
    </main>
  );
};

export default Button;