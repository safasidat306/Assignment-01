export default function Contact() {
  return (
    <div className="container mx-auto p-8 bg-white shadow-xl rounded-lg max-w-3xl">
      <h1 className="text-4xl text-center font-semibold text-gray-900 mb-8 tracking-wide">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        We&apos;re here to assist you. Whether you have a question, want to discuss a project, or just need advice, our team is ready to help.
      </p>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Feel free to reach out through any of the following methods:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
          <a href="mailto:contact@ourcompany.com" className="text-lg text-indigo-600 hover:underline">contact@ourcompany.com</a>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
          <a href="tel:+11234567890" className="text-lg text-indigo-600 hover:underline">(123) 456-7890</a>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h2>
        <p className="text-lg text-gray-600">
          123 Business Ave, Suite 101, City, Country
        </p>
      </div>
    </div>
  );
}
