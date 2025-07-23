// src/App.jsx
import React, { useState } from 'react';

// Asset and Component Imports
import { images } from './assets';
import TicketModal from './Pages/TicketModal';
import VideoModal from './Pages/VideoModal';
import Hero from './Pages/sections/Hero';
import PerformingArtFestival from './Pages/sections/PerformingArtFestival';
import OurArtPerforming from './Pages/sections/OurArtPerforming';
import ShowcaseSection from './Pages/sections/ShowcaseSection';
import Testimonials from './Pages/sections/Testimonials';
import Footer from './Pages/Footer';

function App() {
  const [isTicketModalOpen, setTicketModalOpen] = useState(false);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
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
      <VideoModal open={isVideoModalOpen} onOpenChange={setVideoModalOpen} />

      <Hero onGetTicket={handleGetTicket} />
      
      <main>
        <PerformingArtFestival onPlayVideo={handlePlayVideo} />
        <OurArtPerforming />
        <ShowcaseSection 
          title="MAHABHARATA PUPPET"
          subtitle="SHOW AT PRAMBANAN"
          description="Ramayana stories based on Hindu epics adapted to Javanese culture make Ramayana Prambanan a unique dance. More than 200 professional dancers and gamelan."
          image={images.puppet}
          onGetTicket={handleGetTicket}
        />
        <ShowcaseSection 
          title="TRADITIONAL MUSIC"
          subtitle="SHOW AT PRAMBANAN"
          description="Ramayana stories based on Hindu epics adapted to Javanese culture make Ramayana Prambanan a unique dance. More than 200 professional dancers and gamelan."
          image={images.gamelan}
          imageLeft={true}
          onGetTicket={handleGetTicket}
        />
        <Testimonials onGetTicket={handleGetTicket} />
      </main>

      <Footer />
    </div>
  );
}

export default App;