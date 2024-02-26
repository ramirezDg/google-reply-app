function BtnSearch ({ theme, isActive, onClick, children }) {
    // Definir clases de estilo basadas en el tema y el estado
  const getButtonClasses = () => {
    let themeClasses = '';
    switch (theme) {
      case 'primary':
        themeClasses = 'bg-blue-500 text-white';
        break;
      case 'secondary':
        themeClasses = 'bg-gray-300 text-black';
        break;
      case 'danger':
        themeClasses = 'bg-red-500 text-white';
        break;
      default:
        themeClasses = 'bg-gray-200 text-gray-400 pointer-events-none';
    }

    return `${themeClasses} ${isActive ? 'opacity-75 cursor-not-allowed' : ''} py-2 px-4 rounded`;
  };

    
    
    return (
        <button
            className={getButtonClasses()}
            onClick={onClick}
            disabled={isActive}
        >
      {children}
    </button>
    )
}

export default BtnSearch