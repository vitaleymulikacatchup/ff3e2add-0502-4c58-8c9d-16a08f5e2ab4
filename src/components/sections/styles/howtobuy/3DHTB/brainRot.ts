import { HowToBuyStyle } from '../types';
import { brainRotTheme as theme } from '../../shared/themes';
import { ColorTemplate } from '../../shared/themeConfig';
import { getBrainRotColors } from '../../shared/themeConfig';

export function getBrainRotHowToBuyStyle(colorTemplate: ColorTemplate = 1): HowToBuyStyle {
    const colors = getBrainRotColors(colorTemplate);
    
    return {
        section: {
            className: `${theme.spacing.sectionPadding}`,
            backgroundColor: colors.primary
        },
        title: {
            className: `text-6xl md:!text-[clamp(4rem,8vw,8rem)] text-center ${theme.text.headingClass} text-white ${theme.heading.className}`,
            text: ''
        },
        bento: {
            className: '',
            gridClassName: '',
            itemClassName: `${colorTemplate === 1 ? '!bg-brain-rot-template-1-secondary' : '!bg-brain-rot-template-2-secondary'} ${colors.border} border-2`,
            textContainerClassName: 'gap-3',
            imageContainerClassName: `!h-70 bg-black flex items-center`,
            imageClassName: '!h-2/3 w-auto object-contain',
            titleClassName: `${theme.heading.className} text-xl md:!text-2xl ${theme.text.headingClass} text-black`,
            descriptionClassName: `${theme.description.className} text-sm md:!text-base text-black`,
            enableAnimation: true
        }
    };
}

export const brainRotStyle = getBrainRotHowToBuyStyle(1);