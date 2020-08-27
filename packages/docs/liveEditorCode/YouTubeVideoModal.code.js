() => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <YouTubeVideoModal
        videoId="MLKKzRvOsLQ"
        translations={{
          title: 'Video modal example',
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
      />
    </>
  );
};
