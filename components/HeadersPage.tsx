type HeadersPageProps = {
  heading: string;
  info: string;
};

export default function HeadersPage({ heading, info }: HeadersPageProps) {
  return (
    <header className="pb-6">
      <h2 className="text-3xl font-bold leading-8 text-blue-marine-dark">
        {heading}
      </h2>
      <p className="mt-2 text-[0.9rem] text-gray-cool">{info}</p>
    </header>
  );
}
