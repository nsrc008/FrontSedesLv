import { ButtonHTMLAttributes, FC, ReactNode } from "react";

// Definir la interfaz del componente de botón extendiendo las propiedades nativas de HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "info" | "success"; // Tipos de botones
  children: ReactNode; // Para pasar texto o contenido al botón
  onClick?: () => void; // Acción al hacer clic
}

const Button: FC<ButtonProps> = ({
  variant = "primary", // Valor por defecto si no se pasa un variant
  children,
  onClick,
  className,
  ...rest // Otros atributos como `id`, `style`, etc.
}) => {
  // Aplicar clases dinámicas en función del tipo de botón
  const buttonClass = `btn btn-${variant} ${className ?? ""}`;

  return (
    <button
      className={buttonClass} // Clases dinámicas para estilos
      onClick={onClick} // Acción a ejecutar
      {...rest} // Otros atributos nativos
    >
      {children}
    </button>
  );
};

export default Button;
