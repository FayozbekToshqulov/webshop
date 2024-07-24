import React, { useState } from 'react';
import axios from 'axios';

const TelegramForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendtelegram = async () => {
    const { name, email, message } = formData;
    const telegram_bot_id = '7281401106:AAEaVtMaVrKUjatcDrQxaOVt3DfvUDMQAuk'; // Replace with your bot token
    const chat_id = 5332949494; // Replace with the chat ID

    const data = {
      chat_id: chat_id,
      text: `Ismii : ${name}\nEmail: ${email}\nIzoh: ${message} `
    };

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error sending message to Telegram', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendtelegram();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email manzilingiz"
          value={formData.email}
          onChange={handleChange}
          required
        /> <br /> <br />
        <textarea
          name="message"
          id="message"
          cols="45"
          rows="10"
          placeholder="Izoh qoldiring"
          value={formData.message}
          onChange={handleChange}
          required
        /> <br /> <br />
        <input type="submit" value="Yuborish" id="btn" />
      </form>
    </div>
  );
};

export default TelegramForm;
