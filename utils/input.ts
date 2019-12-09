import { createInterface } from 'readline';

export function processInputLines(lineHandler: (line: string) => void, completionHandler?: () => void) {
    const reader = createInterface({
        input: process.stdin,
        terminal: false
    });

    if (completionHandler != null)
        reader.on('close', completionHandler);
        
    reader.on('line', lineHandler);
}