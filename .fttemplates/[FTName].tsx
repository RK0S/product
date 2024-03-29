import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName] = memo((props: [FTName]Props) => {
   const { className } = props;

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
})