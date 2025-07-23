import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

    console.log("Submitting form data:", data);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Booking successful! (Check console for data)');
        onOpenChange(false);
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

export default TicketModal;