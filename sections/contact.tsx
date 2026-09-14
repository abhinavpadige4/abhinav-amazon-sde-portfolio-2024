import { useState } from 'react';
import FormInput from '@/components/form-input';
import FormButton from '@/components/form-button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call to Formspree
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, this would be:
      // const response = await fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Me
        </h2>
        
        {submitStatus && (
          <div className={`mb-8 p-4 rounded-lg text-center ${
            submitStatus.type === 'success' 
              ? 'bg-amazon-900/50 border border-amazon-600/50 text-amazon-400'
              : 'bg-red-900/50 border border-red-600/50 text-red-400'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onHandleChange={handleChange}
              error={formErrors.name}
              required
            />
            <FormInput
              label="Email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onHandleChange={handleChange}
              error={formErrors.email}
              required
            />
          </div>
          
          <FormInput
            label="Message"
            type="textarea"
            placeholder="Tell me about your project or opportunity..."
            value={formData.message}
            onHandleChange={handleChange}
            error={formErrors.message}
            required
          />
          
          <div className="flex justify-center">
            <FormButton 
              variant="primary"
              loading={isSubmitting}
              onClick={handleSubmit}
            >
              Send Message
            </FormButton>
          </div>
        </form>
        
        <div className="mt-12 text-center text-gray-400">
          <p>Alternatively, reach me directly at:</p>
          <p className="mt-2 text-amazon-400 font-medium">
            abhinav@email.com • linkedin.com/in/abhinav
          </p>
        </div>
      </div>
    </section>
  );
}