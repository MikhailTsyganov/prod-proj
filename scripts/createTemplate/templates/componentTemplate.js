const interfaceConst = 'interface';
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (componentName) => {

    const componentNameUpper = firstCharUpperCase(componentName);

    return `import { classNames } from 'shared/lib/helpers/classNames/classNames';
    import { useTranslation } from 'react-i18next';
    import s from './${componentName}.module.scss';
    import { memo } from 'react';
    
    ${interfaceConst} I${componentNameUpper}Props {
        className?: string;
    }
    
    export const ${componentName} = memo((props: I${componentNameUpper}Props) => {
        const { className } = props;
        const { t } = useTranslation();
        
        return (
            <div className={classNames(s.${componentName}, {}, [className])}>
               
            </div>
        );
    });`
};