import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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

export default VideoModal;