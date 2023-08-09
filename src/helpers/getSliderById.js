import { sliderTintaRojaMain } from "./sliderTintaRojaMain";

export const getSliderById = ( id ) => {
    const validSlider = ['tinta-roja', 'departamento', 'cabaña-tinta-roja' ]
    if ( !validSlider.includes( id ) ) {
        throw new Error( `${ id } no es valido` )
    }
    return sliderTintaRojaMain.filter( slider => slider.id === id )
}