import { HeroStyle } from '../types';
import { brainRotTheme as theme } from '../../shared/themes';
import { ColorTemplate } from '../../shared/themeConfig';
import { getBrainRotColors } from '../../shared/themeConfig';

export function getBrainRotHeroStyle(colorTemplate: ColorTemplate = 1): HeroStyle {
    const colors = getBrainRotColors(colorTemplate);
    
    const cellColor = colorTemplate === 1 
        ? 'var(--color-brain-rot-template-1-secondary)' 
        : 'var(--color-brain-rot-template-2-secondary)';
    
    return {
        section: {
            className: colors.primary,
            height: "h-svh md:h-screen",
            contentAlignment: "items-center justify-center",
            textContainerClassName: `${theme.text.white} ${theme.fonts.heading.className}`,
            gapClassName: theme.spacing.gap,
            cellWaveBackground: {
                enabled: true,
                cellColor: cellColor,
                columns: 5,
                rows: 24,
                duration: 0.25,
                delay: 1.25
            }
        },
        heading: {
            className: `text-6xl md:text-[clamp(4rem,15vw,12rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
            text: ''
        },
        subheading: {
            className: `md:max-w-[60%] text-white ${theme.description.className}`
        }
    };
}

export const brainRotStyle = getBrainRotHeroStyle(1);