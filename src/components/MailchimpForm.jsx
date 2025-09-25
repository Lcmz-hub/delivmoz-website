
// Componente MailchimpForm
export function MailchimpForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div id="mc_embed_signup">
        <form
          action="https://app.us3.list-manage.com/subscribe/post?u=579962decf1fa7ee97a50fbdd&amp;id=a7f2566688"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2 className="text-2xl font-bold mb-4">Inscrever</h2>
            <div className="indicates-required mb-2">
              <span className="asterisk">*</span> indica obrigatório
            </div>
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-EMAIL" className="block mb-1 font-medium">
                Endereço de e-mail <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email w-full px-4 py-2 border rounded-lg"
                id="mce-EMAIL"
                required
              />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_579962decf1fa7ee97a50fbdd_a7f2566688"
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                id="mc-embedded-subscribe"
              >
                Assinar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
import { MailchimpForm } from './components/MailchimpForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <MailchimpForm />
      <Footer />
    </div>
  );
}

export default App;