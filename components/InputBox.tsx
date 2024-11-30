interface InputBoxProps {
    styles: string;
    placeholder: string;
    type?: string; // Optional, defaults to "text"
  }
  
  export default function InputBox({ styles, placeholder, type = "text" }: InputBoxProps) {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={styles}
        />
      </div>
    );
  }
  