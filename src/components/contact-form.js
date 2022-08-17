import { useForm, ValidationError } from "@formspree/react";
import formStyles from "../styles/form.module.css";
import { Heading, Container } from 'theme-ui';

export default function ContactForm({title}) {
    // ID can be: process.env.NEXT_PUBLIC_FORM
    const [state, handleSubmit] = useForm('process.env.NEXT_PUBLIC_FORM');
    if (state.succeeded) {
      return <p>Thanks for your submission!</p>;
    }
    return (

      <Container>
        <Heading as="h1">{title}</Heading>
        <form onSubmit={handleSubmit} className={formStyles.container}>
          
          {/* Name */}
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            className={formStyles.inputs}
          />

          {/* <label htmlFor="email" className={formStyles.labels}>
            Your email:
          </label> */}

          {/* Email */}

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className={formStyles.inputs}
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={formStyles.fieldErrors}
          />

          {/* Phone */}

          <input
            id="phone"
            type="phone"
            name="phone"
            placeholder="Phone"
            className={formStyles.inputs}
          />

          {/* Subject */}

          <input
            id="subject"
            type="subject"
            name="subject"
            placeholder="Subject"
            className={formStyles.inputs}
          />

          {/* <label htmlFor="message" className={formStyles.labels}>
            Your message:
          </label> */}
          {/* Message */}

          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            className={`${formStyles.inputs} ${formStyles.textarea}`}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={formStyles.fieldErrors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className={`${formStyles.inputs} ${formStyles.button}`}
          >
            Submit
          </button>
          <ValidationError
            errors={state.errors}
            className={formStyles.formErrors}
          />

        </form>
      </Container>

    );
  }
  