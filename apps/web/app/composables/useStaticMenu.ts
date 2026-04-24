export const useStaticMenu = () => {
  const isOpen = useState<boolean>('staticMenuOpen', () => false);

  return {
    isOpen,
    open: () => (isOpen.value = true),
    close: () => (isOpen.value = false),
  };
};
