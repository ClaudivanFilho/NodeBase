var Book = require('./book.model.js');

var Populate = {};
Populate.books = addBooks;
module.exports = Populate;

function addBooks() {
  var livro = new Book({
    titulo : "Harry Potter e a Pedra Filosofal",
    autores : "J.K. Rowling",
    descricao : "O menino de olhos verdes, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer; ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. ",
    capa : "https://images.skoob.com.br/PW_xixfHBfVBdm9-mQoIfLQZqUA=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/108/HARRY_POTTER_E_A_PEDRA_FILOSOFAL_1389761588B.jpg",
    preco : 17.90,
    comentarios : []});
  var livro2 = new Book({
    titulo : "A Menina que Roubava Livros",
    autores : "Markus Zusak",
    descricao : "Ao perceber que a pequena Liesel Meminger, uma ladra de livros, lhe escapa, a Morte afeiçoa-se à menina e rastreia suas pegadas de 1939 a 1943. A mãe comunista, perseguida pelo nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe a adotá-los por dinheiro. O garoto morre no trajeto e é enterrado por um coveiro que deixa cair um livro na neve. É o primeiro de uma série que a menina vai surrupiar ao longo dos anos. O único vínculo com a família é esta obra, que ela ainda não sabe ler. Assombrada por pesadelos, ela compensa o medo e a solidão das noites com a conivência do pai adotivo, um pintor de parede bonachão que lhe dá lições de leitura. Alfabetizada sob vistas grossas da madrasta, Liesel canaliza urgências para a literatura. Em tempos de livros incendiados, ela os furta, ou os lê na biblioteca do prefeito da cidade. A vida ao redor é a pseudo-realidade criada em torno do culto a Hitler na Segunda Guerra. Ela assiste à eufórica celebração do aniversário do Führer pela vizinhança. Teme a dona da loja da esquina, colaboradora do Terceiro Reich. Faz amizade com um garoto obrigado a integrar a Juventude Hitlerista. E ajuda o pai a esconder no porão um judeu que escreve livros artesanais para contar a sua parte naquela História.",
    capa : "https://images.skoob.com.br/I8HhJL8bSDPgwgt4uFaVQ8a9XkY=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/7/A_MENINA_QUE_ROUBAVA_LIVROS_14476507387SK1447650738B.jpg",
    preco : 21.90,
    comentarios : []});
  var livro3 = new Book({
    titulo : "O Regresso",
    autores : "Michael Punke",
    descricao : "Em uma das missões da companhia, Hugh Glass, um dos melhores e mais experientes caçadores do grupo, fica frente a frente com um urso-cinzento, é atacado e termina gravemente ferido, claramente sem chances de sobreviver. Os homens que deveriam esperar sua morte e lhe oferecer um funeral apropriado o abandonam, levando consigo as armas e os suprimentos. Entre delírios, Glass os observa fugindo e é tomado por um único desejo: vingança. Uma determinação cega que o torna capaz de atravessar quase cinco mil quilômetros de terras intocadas e selvagens, fugindo de predadores, sobrevivendo à fome e à agonia dos ferimentos mais terríveis, a fim de concluir seu objetivo.",
    capa : "https://images.skoob.com.br/Jxtp1kisFlLytK-9QH0tJODxR5Y=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/542171/O_REGRESSO_1452889207542171SK1452889207B.jpg",
    preco : 23.90,
    comentarios : []});
  livro.save();
  livro2.save();
  livro3.save();
}
