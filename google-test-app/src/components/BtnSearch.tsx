function BtnSearch ({  isActive, onClick, children }) {
    // Definir clases de estilo basadas en el tema y el estado
    const buttonClasses = `py-2 px-4 rounded ${isActive
      ? 'bg-blue-500 text-white cursor-pointer'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`;
    
    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={isActive}
        >
      {children}
    </button>
    )
}

export default BtnSearch