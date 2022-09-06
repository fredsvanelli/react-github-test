import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Config from 'Config';

import useTitle from 'hooks/useTitle';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const setTitle = useTitle();

  useEffect(() => {
    setTitle(t('home.head-title'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <h1>Validador de CPF ONLINE!!!</h1>
      <p>Criando nova alteração em master</p>
      <input type="text" placeholder="CPF" />
      <button type="button">Validar</button>
    </>
  );
};

export default memo(Home);
