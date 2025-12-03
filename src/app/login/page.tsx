import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/components/sign-in-button";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <Logo className="h-12 w-auto text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Teal Market
        </h1>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Your minimalist phone marketplace.
        </p>
      </div>

      <Card className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>to continue to Teal Market</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton />
        </CardContent>
      </Card>
    </div>
  );
}
