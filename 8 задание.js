let google = new Map();
google.set(1, 'doodle');
google.set(2, 'loodle');
google.set('third', true);
for (let i of google.keys()) {
    console.log(`Ключ - ${i}, згачение - ${google.get(i)}`);
}