  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/layosbenedict3@gmail.com", {
        method: "POST",
        body: formData
      });

      form.reset();
      toast.classList.add('show');
      toast.classList.remove('hidden');

      setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hidden');
      }, 4000);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
});
