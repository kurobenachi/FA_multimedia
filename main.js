
 const sections = document.querySelectorAll('h2[id]');
 const links = document.querySelectorAll('.nav-link');


 const observerOptions = {
   root: null,
   rootMargin: '0px 0px -50% 0px',
   threshold: 0.1 
 };

 const observerCallback = (entries) => {
   entries.forEach(entry => {
	 const id = entry.target.id;
	 const activeLink = document.querySelector(`a[href="#${id}"]`);

	 if (entry.isIntersecting) {

	   links.forEach(link => link.classList.remove('active'));

	   activeLink.classList.add('active');
	 }
   });
 };

 const observer = new IntersectionObserver(observerCallback, observerOptions);
 sections.forEach(section => observer.observe(section));