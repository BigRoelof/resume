import {FC, memo, useCallback, useState} from 'react';

import {useLocale} from '../../../context/LocaleContext';
import {getLocalizedContent} from '../../../data/localizedContent';

const ContactForm: FC = memo(() => {
  const {locale} = useLocale();
  const {contactForm} = getLocalizedContent(locale);
  const web3FormsAccessKey = '18569213-0c44-4ce8-9223-659fe50f18dc';
  const [result, setResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setResult(contactForm.sending);

      const formElement = event.currentTarget;
      const formData = new FormData(formElement);
      formData.append('access_key', web3FormsAccessKey);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        const responseData = await response.json();

        if (response.ok && responseData.success) {
          setResult(contactForm.success);
          formElement.reset();
        } else {
          setResult(contactForm.failure);
        }
      } catch (error) {
        setResult(contactForm.networkError);
      } finally {
        setIsSubmitting(false);
      }
    },
    [contactForm.failure, contactForm.networkError, contactForm.sending, contactForm.success],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" placeholder={contactForm.namePlaceholder} required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        placeholder={contactForm.emailPlaceholder}
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        placeholder={contactForm.messagePlaceholder}
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={isSubmitting}
        type="submit">
        {isSubmitting ? contactForm.sending : contactForm.submit}
      </button>
      <p className="min-h-[1.25rem] text-sm text-neutral-300">{result}</p>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
