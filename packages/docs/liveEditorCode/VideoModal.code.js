() => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <VideoModal
        posterUrl="https://transferwise.com/staticrab/homepage/_next/static/images/en-e09d936b919f436ff85caf38e1822030.jpg"
        translations={{
          poster: {
            alt: 'Example',
          },
          close: {
            ariaLabel: 'Close',
          },
        }}
        isOpen={open}
        onDismiss={() => setOpen(false)}
        aria-label="Video modal example"
      >
        <iframe
          title="Video modal example"
          src="https://www.youtube.com/embed/MLKKzRvOsLQ"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        />
      </VideoModal>
    </>
  );
};
