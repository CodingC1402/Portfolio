import * as React from 'react';
import { useTranslation } from 'react-i18next';

export interface IGoalsProps {
}

export default function Goals (props: IGoalsProps) {
  const {t} = useTranslation();

  return (
    <div style={{width: "100%", height: "100%", display: "grid", justifyItems: "center", alignItems: "center", fontSize: "50px"}}>
      {t("goalsMessage")}
    </div>
  );
}
