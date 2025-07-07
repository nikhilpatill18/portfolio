"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" }
}) => {
  const formdata = new FormData();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [useremail, setUseremail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    formdata.append('firstname', firstname);
    formdata.append('lastname', lastname);
    formdata.append('email', useremail);
    formdata.append('subject', subject);
    formdata.append('message', message);
    console.log(formdata);
    const data = {
      firstname,
      lastname,
      email: useremail,
      subject,
      message
    };


    const response = await fetch('/api/contact', {
      method: 'POST', body: JSON.stringify(data), headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(await response.json());
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">Contact Details</h3>
              <ul className="ml-4 list-disc">
                <li><span className="font-bold">Phone: </span>{phone}</li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">{email}</a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" rel="noopener noreferrer" className="underline">{web.label}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);;
                  }

                  }
                  className='bg-gray-800'
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                   className='bg-gray-800'
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
                 className='bg-gray-800'
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                 className='bg-gray-800'
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                 className='bg-gray-800'
              />
            </div>
            <Button onClick={handleSubmit} className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
