// src/App.jsx
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlayCircle, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

// NOTE: Images are placeholders from Pexels/Unsplash. 
// Replace the URLs with your actual image assets.
const assets = {
  templeSilhouette: 'https://i.imgur.com/sI8x1aY.png', // A custom-made silhouette to match the design
  mountains1: 'https://i.imgur.com/uG4Xg8K.png',
  mountains2: 'https://i.imgur.com/3sFm2WJ.png',
  videoThumbnail: 'https://images.pexels.com/photos/1231023/pexels-photo-1231023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  art1: 'https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  art2: 'https://images.pexels.com/photos/10411333/pexels-photo-10411333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  art3: 'https://images.pexels.com/photos/1020052/pexels-photo-1020052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  art4: 'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  puppet: 'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  gamelan: 'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  testimonial1: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  testimonial2: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  testimonial3: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  testimonial4: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

// Reusable Navbar Component
const Navbar = ({ isFooter = false }) => {
  const navClass = isFooter 
    ? "text-gray-400" 
    : "text-white";
  const linkClass = "hover:text-primary transition-colors";

  return (
    <nav className="flex items-center justify-between w-full">
      <h1 className={`font-display text-2xl tracking-widest ${navClass}`}>RAMAYANA</h1>
      <div className={`hidden md:flex items-center gap-8 font-medium ${navClass}`}>
        <a href="#home" className={linkClass}>Home</a>
        <a href="#schedule" className={linkClass}>Schedule</a>
        <a href="#blog" className={linkClass}>Blog</a>
        <a href="#contact" className={linkClass}>Contact</a>
      </div>
      {isFooter && (
        <div className="flex items-center gap-4 text-gray-400">
          <a href="#" className={linkClass}><Twitter size={20} /></a>
          <a href="#" className={linkClass}><Instagram size={20} /></a>
          <a href="#" className={linkClass}><Youtube size={20} /></a>
          <a href="#" className={linkClass}><Facebook size={20} /></a>
        </div>
      )}
    </nav>
  );
};

// Ticket Booking Modal
const TicketModal = ({ open, onOpenChange, showName }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      show: showName,
      name: formData.get('name'),
      email: formData.get('email'),
      tickets: formData.get('tickets'),
    };

    // Dummy API call simulation
    console.log("Submitting form data:", data);
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Booking successful! (Check console for data)');
        onOpenChange(false); // Close modal on success
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl">Book Your Ticket</DialogTitle>
          <DialogDescription>
            Get your ticket for the amazing {showName} show.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" name="name" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" name="email" type="email" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tickets" className="text-right">Tickets</Label>
            <Input id="tickets" name="tickets" type="number" defaultValue="1" min="1" className="col-span-3" required />
          </div>
          <DialogFooter>
            <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90 w-full">Confirm Booking</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Video Player Modal
const VideoModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-black border-0 p-1">
        <div className="aspect-video">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/a2W_8rKjp4o?autoplay=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};


// Main Page Sections
const Hero = ({ onGetTicket }) => (
  <section id="home" className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#F3A381] to-[#E995A9] z-0" />
    <Parallax speed={-25} className="absolute bottom-0 left-0 w-full h-3/4">
        <img src={assets.mountains2} alt="Mountains" className="w-full h-full object-cover" />
    </Parallax>
    <Parallax speed={-15} className="absolute bottom-0 left-0 w-full h-2/3">
        <img src={assets.mountains1} alt="Far mountains" className="w-full h-full object-cover" />
    </Parallax>
    <Parallax speed={5} className="absolute bottom-0 left-0 w-full h-1/2">
        <img src={assets.templeSilhouette} alt="Prambanan Temple" className="w-full h-full object-contain object-bottom" />
    </Parallax>

    <div className="relative z-10 flex flex-col items-center px-4">
      <div className="absolute top-[-5rem] w-full">
        <Navbar />
      </div>
      <h2 className="font-display text-5xl md:text-7xl tracking-[0.2em]">SENDRATARI</h2>
      <h1 className="font-display text-7xl md:text-9xl tracking-widest text-shadow-default" style={{ WebkitTextStroke: '1px #333', textStroke: '1px #333' }}>
        RAMAYANA
      </h1>
      <p className="font-medium tracking-widest text-sm mt-2">AT PRAMBANAN TEMPLE</p>
      <Button onClick={() => onGetTicket('Sendratari Ramayana')} className="mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-md tracking-wider">
        GET TICKET
      </Button>
    </div>
  </section>
);

const PerformingArtFestival = ({ onPlayVideo }) => (
  <section className="py-20 px-4 bg-background relative">
    <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-red-900/20 to-transparent opacity-50"></div>
    <div className="container mx-auto text-center">
      <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">PERFORMING ART FESTIVAL</h2>
      <p className="mt-2 text-lg text-gray-400">Sendratari Ramayana</p>
      <div 
        className="relative max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden cursor-pointer group"
        onClick={onPlayVideo}
      >
        <img src={assets.videoThumbnail} alt="Ramayana Ballet Performance" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <PlayCircle size={80} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </div>
  </section>
);

const OurArtPerforming = () => (
  <section className="py-20 px-4 bg-background">
    <div className="container mx-auto text-center">
      <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">OUR ART</h2>
      <h3 className="font-display text-5xl md:text-6xl tracking-[0.2em]">PERFORMING</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[assets.art1, assets.art2, assets.art3, assets.art4].map((src, index) => (
          <div key={index} className="rounded-2xl overflow-hidden h-96">
            <img src={src} alt={`Art Performance ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ShowcaseSection = ({ title, subtitle, description, image, imageLeft = false, onGetTicket }) => (
  <section className="py-20 px-4 bg-background relative overflow-hidden">
    <div className={`container mx-auto flex flex-col md:flex-row items-center gap-12 ${imageLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="font-display text-4xl md:text-5xl tracking-[0.15em]">{title}</h2>
        <h3 className="font-display text-4xl md:text-5xl tracking-[0.15em]">{subtitle}</h3>
        <p className="mt-6 text-gray-400 max-w-md mx-auto md:mx-0">
          {description}
        </p>
        <Button onClick={() => onGetTicket(title)} className="mt-8 bg-gradient-to-r from-[#FF7E5F] to-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg text-md tracking-wider">
          GET TICKET
        </Button>
      </div>
      <div className="md:w-1/2 relative flex justify-center items-center">
         <div className="absolute bg-secondary w-52 h-52 md:w-72 md:h-72 rounded-3xl -z-0"></div>
         <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
         </div>
      </div>
    </div>
     <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-red-900/20 to-transparent opacity-50"></div>
  </section>
);

const testimonialsData = [
    { id: 1, name: 'Agum Markuyang', image: assets.testimonial1, quote: 'Ramayana ballet is the most amazing performing arts I have ever seen. the mix of artists, musicians and lights is great. I also like the traditional clothes. culture is very abundant.' },
    { id: 2, name: 'Johanes Manani', image: assets.testimonial2, quote: 'A breathtaking experience! The scale of the production is massive, and the story comes to life in front of the majestic Prambanan temple. A must-see.' },
    { id: 3, name: 'Karen Anastasha', image: assets.testimonial3, quote: 'The Gamelan music was enchanting and perfectly set the mood. I was captivated from start to finish. Highly recommended for any culture enthusiast.' },
    { id: 4, name: 'Roberto Carlos', image: assets.testimonial4, quote: 'The costumes and masks are a work of art. You can see the incredible detail and craftsmanship in every piece. A visual feast!' },
];

const Testimonials = ({ onGetTicket }) => {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonialsData[0]);

    return (
        <section className="py-20 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-display text-5xl md:text-6xl tracking-[0.2em]">WHAT PEOPLE SAY</h2>
                <div className="max-w-4xl mx-auto mt-12 p-8 bg-gray-900/30 rounded-3xl">
                    <div className="flex justify-center items-start gap-4 mb-8 flex-wrap">
                        {testimonialsData.map(t => (
                            <div key={t.id} className="text-center cursor-pointer" onClick={() => setActiveTestimonial(t)}>
                                <img src={t.image} alt={t.name} className={`w-20 h-20 rounded-2xl object-cover mx-auto border-4 ${activeTestimonial.id === t.id ? 'border-primary' : 'border-transparent'} transition-all`} />
                                <p className="text-xs mt-2 text-gray-400">{t.name}</p>
                            </div>
                        ))}
                         <div className="flex flex-col justify-center items-center w-20 h-20 bg-secondary rounded-2xl text-center p-2">
                             <p className="text-white font-bold text-sm">Another</p>
                             <p className="text-white font-bold text-lg">325+</p>
                             <p className="text-white text-xs">Artists</p>
                         </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-3xl font-medium">{activeTestimonial.name}</h3>
                        <div className="flex justify-center gap-4 my-3 text-gray-400">
                             <a href="#" className="hover:text-primary"><Facebook size={18} /></a>
                             <a href="#" className="hover:text-primary"><Instagram size={18} /></a>
                             <a href="#" className="hover:text-primary"><Twitter size={18} /></a>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                           "{activeTestimonial.quote}"
                        </p>
                        <Button onClick={() => onGetTicket('Ramayana Ballet')} className="mt-8 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-lg text-md tracking-wider">
                            GET TICKET
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-12 bg-[#121212]">
      <div className="container mx-auto px-4">
        <Navbar isFooter={true} />
        <hr className="my-8 border-gray-700"/>
        <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Ramayana Prambanan. All Rights Reserved.</p>
      </div>
    </footer>
);

function App() {
  const [isTicketModalOpen, setTicketModalOpen] = useState(false);
  const [isVideModalOpen, setVideoModalOpen] = useState(false);
  const [ticketShowName, setTicketShowName] = useState('');

  const handleGetTicket = (showName) => {
    setTicketShowName(showName);
    setTicketModalOpen(true);
  };
  
  const handlePlayVideo = () => {
    setVideoModalOpen(true);
  };

  return (
    <div className="bg-background">
      <TicketModal open={isTicketModalOpen} onOpenChange={setTicketModalOpen} showName={ticketShowName} />
      <VideoModal open={isVideModalOpen} onOpenChange={setVideoModalOpen} />

      <Hero onGetTicket={handleGetTicket} />
      <main>
        <PerformingArtFestival onPlayVideo={handlePlayVideo}/>
        <OurArtPerforming />
        <ShowcaseSection 
          title="MAHABHARATA PUPPET"
          subtitle="SHOW AT PRAMBANAN"
          description="Ramayana stories based on Hindu epics adapted to Javanese culture make Ramayana Prambanan a unique dance. More than 200 professional dancers and gamelan."
          image={assets.puppet}
          onGetTicket={handleGetTicket}
        />
        <ShowcaseSection 
          title="TRADITIONAL MUSIC"
          subtitle="SHOW AT PRAMBANAN"
          description="Ramayana stories based on Hindu epics adapted to Javanese culture make Ramayana Prambanan a unique dance. More than 200 professional dancers and gamelan."
          image={assets.gamelan}
          imageLeft={true}
          onGetTicket={handleGetTicket}
        />
        <Testimonials onGetTicket={handleGetTicket}/>
      </main>
      <Footer />
    </div>
  )
}

export default App;