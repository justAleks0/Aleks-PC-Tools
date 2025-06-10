function convertCase(type) {
    const input = document.getElementById('inputText').value;
    let result = '';

    switch(type) {
        case 'lower':
            result = input.toLowerCase();
            break;
        case 'upper':
            result = input.toUpperCase();
            break;
        case 'title':
            result = input.toLowerCase().split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            break;
        case 'sentence':
            result = input.toLowerCase().replace(/(^\w|\.\s+\w)/g, letter => letter.toUpperCase());
            break;
        case 'camel':
            result = input.toLowerCase()
                .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
                .replace(/^[A-Z]/, chr => chr.toLowerCase());
            break;
        case 'pascal':
            result = input.toLowerCase()
                .replace(/(^|\s)\w/g, letter => letter.trim().toUpperCase())
                .replace(/[^a-zA-Z0-9]/g, '');
            break;
        case 'snake':
            result = input.toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^a-zA-Z0-9_]/g, '');
            break;
        case 'const':
            result = input.toUpperCase()
                .replace(/\s+/g, '_')
                .replace(/[^A-Z0-9_]/g, '');
            break;
        case 'kebab':
            result = input.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-zA-Z0-9-]/g, '');
            break;
        case 'dot':
            result = input.toLowerCase()
                .replace(/\s+/g, '.')
                .replace(/[^a-zA-Z0-9.]/g, '');
            break;
        case 'alternating':
            result = input.toLowerCase().split('')
                .map((char, i) => i % 2 === 0 ? char : char.toUpperCase())
                .join('');
            break;
        case 'inverse':
            result = input.split('')
                .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
                .join('');
            break;
        case 'reverse':
            result = input.split('').reverse().join('');
            break;
        case 'wide':
            result = input.split('').join(' ');
            break;
        case 'tiny':
            const tinyMap = {
                'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ',
                'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᑫ', 'r': 'ʳ',
                's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
            };
            result = input.toLowerCase().split('')
                .map(char => tinyMap[char] || char)
                .join('');
            break;
        case 'bubble':
            const bubbleMap = {
                'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ',
                'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ',
                's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ'
            };
            result = input.toLowerCase().split('')
                .map(char => bubbleMap[char] || char)
                .join('');
            break;
        case 'medieval':
            const medievalMap = {
                'a': '𝔄', 'b': '𝔅', 'c': 'ℭ', 'd': '𝔇', 'e': '𝔈', 'f': '𝔉', 'g': '𝔊', 'h': 'ℌ', 'i': 'ℑ',
                'j': '𝔍', 'k': '𝔎', 'l': '𝔏', 'm': '𝔐', 'n': '𝔑', 'o': '𝔒', 'p': '𝔓', 'q': '𝔔', 'r': 'ℜ',
                's': '𝔖', 't': '𝔗', 'u': '𝔘', 'v': '𝔙', 'w': '𝔚', 'x': '𝔛', 'y': '𝔜', 'z': 'ℨ'
            };
            result = input.toLowerCase().split('')
                .map(char => medievalMap[char] || char)
                .join('');
            break;
        case 'bold':
            const boldMap = {
                'a': '𝐀', 'b': '𝐁', 'c': '𝐂', 'd': '𝐃', 'e': '𝐄', 'f': '𝐅', 'g': '𝐆', 'h': '𝐇', 'i': '𝐈',
                'j': '𝐉', 'k': '𝐊', 'l': '𝐋', 'm': '𝐌', 'n': '𝐍', 'o': '𝐎', 'p': '𝐏', 'q': '𝐐', 'r': '𝐑',
                's': '𝐒', 't': '𝐓', 'u': '𝐔', 'v': '𝐕', 'w': '𝐖', 'x': '𝐗', 'y': '𝐘', 'z': '𝐙'
            };
            result = input.toLowerCase().split('')
                .map(char => boldMap[char] || char)
                .join('');
            break;
        case 'italic':
            const italicMap = {
                'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪',
                'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳',
                's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
            };
            result = input.toLowerCase().split('')
                .map(char => italicMap[char] || char)
                .join('');
            break;
        case 'script':
            const scriptMap = {
                'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲',
                'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻',
                's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
            };
            result = input.toLowerCase().split('')
                .map(char => scriptMap[char] || char)
                .join('');
            break;
        case 'double':
            const doubleMap = {
                'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚',
                'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣',
                's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
            };
            result = input.toLowerCase().split('')
                .map(char => doubleMap[char] || char)
                .join('');
            break;
        case 'superscript':
            const superMap = {
                '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
                'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ',
                'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ',
                't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
            };
            result = input.toLowerCase().split('')
                .map(char => superMap[char] || char)
                .join('');
            break;
        case 'subscript':
            const subMap = {
                '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
                'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ',
                'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ'
            };
            result = input.toLowerCase().split('')
                .map(char => subMap[char] || char)
                .join('');
            break;
        case 'upsidedown':
            const upsideMap = {
                'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ',
                'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ',
                's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
                '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
                '.': '˙', ',': '\'', '!': '¡', '?': '¿', '(': ')', ')': '(', '[': ']', ']': '['
            };
            result = input.toLowerCase().split('')
                .map(char => upsideMap[char] || char)
                .reverse()
                .join('');
            break;
    }

    document.getElementById('outputText').value = result;
}

function copyToClipboard() {
    const output = document.getElementById('outputText');
    output.select();
    document.execCommand('copy');
    
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
}

// Auto-resize textareas
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});