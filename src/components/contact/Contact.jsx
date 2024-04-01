import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';

export default function Contact({ id, name, number, deleteContact }) {
  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <div className={css['container-contact']}>
      <div key={id} className={css['contact-info']}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhone /> {number}
        </div>
      </div>
      <button onClick={handleDelete} className={css['btn-delete']}>
        Delete
      </button>
    </div>
  );
}
