import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center w-full h-full min-h-screen mx-auto bg-zinc-50">
        <div className="flex max-w-3xl bg-white border shadow-md rounded-xl h-[300px] items-center justify-center p-12">
          <AuthForm />
        </div>
      </main>
    </>
  );
}
