import React from "react";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

function ContactList() {
  const contactList = useSelector((state) => state.contactList);
  console.log(contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((i, index) => (
        <ContactItem key={index} name={i.name} number={i.number} />
      ))}
    </div>
  );
}

export default ContactList;
