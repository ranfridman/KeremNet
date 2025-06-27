export function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let r = 30 + (Math.abs(hash) % 80); 
    let g = 120 + (Math.abs(hash >> 3) % 100); 
    let b = 180 + (Math.abs(hash >> 6) % 75); 

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    let color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return color;
}
export function stringAvatar(name: string | undefined) {
    if ( name === undefined) {
        return {
            sx: {
                bgcolor: stringToColor('Kerem'),
            },
        };
    }
    const nameParts = name.split(' ');
    let children = nameParts[0][0];
    if (nameParts.length > 1 && nameParts[1].length > 0) {
        children += nameParts[1][0];
    }
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children,
    };
}