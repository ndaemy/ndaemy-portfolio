import PageNavigator from "@/components/PageNavigator";

export default function Projects({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageNavigator />
      {children}
    </>
  );
}
