import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface buttonProps {
    buttonVariant: string;
    hover: boolean;
    focus: boolean;
    noShadow: boolean;
    disabled: boolean;
    size: string;
    color: string;
    iconType: string;
    iconPlacement: string;
}

const handleAttributes = (
    buttonVariant : string = "default", 
    hover : boolean = false,
    focus : boolean = false, 
    noShadow : boolean = false, 
    disabled : boolean = false,
    size : string = "md",
    color : string = "default") =>
    {
        let className : string = "rounded shadow-lg focus:outline-none";

        const variantDefault : string = "default";
        const variantOutline : string = "outline";
        const variantText : string = "text";

        const colorDefault : string = "default";
        const colorPrimary : string = "primary";
        const colorSecondary : string = "secondary";
        const colorDanger : string = "danger";

        let colorButtons : string = "brown";

        const sm : string = "sm";
        const md : string = "md";
        const lg : string = "lg";

        const btnColors = {
            [colorDefault]: () => { return 'brown'},
            [colorPrimary]: () => { return 'blue'},
            [colorSecondary]: () => { return 'gray'},
            [colorDanger]: () => { return 'red'},
        }

        colorButtons = btnColors[color] ? btnColors[color]() : colorButtons;

        const btnVariants = {
            [variantDefault]: () => { className = `bg-${colorButtons}-300 ${className}` },
            [variantOutline]: () => { className = `bg-transparent border border-${colorButtons}-600 ${className}`},
            [variantText]: () => { className = className}
        }

        const btnSizes = {
            [sm]: () => { className = `px-1 py-1 pl-2 pr-2 ${className}` },
            [md]: () => { className = `px-2 py-2 pl-4 pr-4 ${className}` },
            [lg]: () => { className = `px-3 py-3 pl-6 pr-6 ${className}` },
        }

        btnVariants[buttonVariant] ? btnVariants[buttonVariant]() : btnVariants["default"]();
        btnSizes[size] ? btnSizes[size]() : btnSizes["md"]();


        className = hover ? `${className} hover:bg-${colorButtons}-400` : className;
        className = focus ? `${className} focus:border focus:border-${colorButtons}-900 focus:border-x-6` : className;
        className = noShadow? `${className} shadow-none` : className;
        className = disabled? `${className} opacity-50 cursor-not-allowed` : className;
    
        return className;
    }

const handleIcon = (iconType : string, iconPlacement : string) => {
    const deleteIcon : string = "delete";
    const cartIcon : string = "cart";
    const sellIcon : string = "sell";
    const videoIcon : string = "video";
    const arrowIcon : string = "arrow";

    const iconTypes = {
        [deleteIcon]: () => { return <DeleteIcon fontSize="small" />},
        [cartIcon]: () => { return <ShoppingCartIcon fontSize="small" />},
        [sellIcon]: () => { return <SellIcon fontSize="small" />},
        [videoIcon]: () => { return <PlayCircleIcon fontSize="small" />},
        [arrowIcon]: () => { return <ArrowForwardIcon fontSize="small" />},
    }

    let icon : JSX.Element = <></>;
    icon = iconTypes[iconType] ? iconTypes[iconType]() : icon;

    return handleIconPlacement(icon, iconPlacement);
}

const handleIconPlacement = (icon : JSX.Element, iconPlacement : string) => {
    const buttonText : JSX.Element = <span>Button</span>;
    let returnElement : JSX.Element = buttonText;

    if (iconPlacement === "start"){
        return (
            <section className="flex flex-row gap-2">
                {icon}
                {buttonText}
            </section>
        );
    }

    else if (iconPlacement === "end"){
        return (
            <section className="flex flex-row gap-2">
                {buttonText}
                {icon}
            </section>
        );
    }

    else {
        return (
            <section>
                {buttonText}
            </section>
        )
    }
}

const handleLabel = (    buttonVariant : string = "default", 
    hover : boolean = false,
    focus : boolean = false, 
    noShadow : boolean = false, 
    disabled : boolean = false,
    size : string = "md",
    color : string = "default",
    iconType : string,
    iconPlacement : string) =>{
    
    let label : string = "";

        label = `<button buttonVariant="${buttonVariant}" 
            ${hover ? '&:hover' : ''}
            ${focus ? '&:focus' : ''}
            ${noShadow ? 'noShadow' : ''}  
            ${disabled ? 'disabled' : ''}  
            ${size != "" ? `size="${size}"` : ''}
            ${color != "" ? `color="${color}"` : ''}
            ${iconType != "" ? `iconType="${iconType}"` : ''}
            ${iconPlacement != "" ? `iconPlacement="${iconPlacement}"` : ''}
            />`;

        return label;
    }

function Button({buttonVariant, hover, focus, noShadow, disabled, size, color, iconType, iconPlacement} : buttonProps){

    return(
        <section className="grid grid-rows-1 gap-2">
            <section className="">
                <label className="text-xs font-mono">
                    {handleLabel(buttonVariant, hover, focus, noShadow, disabled, size, color, iconType, iconPlacement)}
                </label>
            </section>

            <section className="">
                <button className={handleAttributes(buttonVariant, hover, focus, noShadow, disabled, size, color)}>
                    {handleIcon(iconType, iconPlacement)}
                </button>
            </section>

        </section>
    )
}

export default Button;