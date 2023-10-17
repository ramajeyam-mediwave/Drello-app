function Card() {
  return (
    <>
      <button>+</button>
      <div className="card">
        <blockquote contenteditable="true">
          <p>Edit this content to add your own quote</p>
        </blockquote>
      </div>
    </>
  );
}
export default Card;
