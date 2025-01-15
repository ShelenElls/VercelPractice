export default async function DashboardLayout({
    children,
    params,
  }: {
    children: React.ReactNode
    params: Promise<{ form: string }>
  }) {
    const { form } = await params
   
    return (
      <section>
        <header>
          <h1>{form.title}</h1>
        </header>
        <main>{children}</main>
      </section>
    )
  }

//   UI layout page that holds the title of the form through pagination? 