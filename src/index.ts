import { Map } from './types'

export function generateMap( html: string ): Map
{    
	console.log( html )

	return {}
}

export function generateCSSFromMap( map: Map )
{   
	console.log( map )

	return ''
}


export function generateCSS( html: string )
{    
	const map = generateMap( html )
	
	return generateCSSFromMap( map )
}
