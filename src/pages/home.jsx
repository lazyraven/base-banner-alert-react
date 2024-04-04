import BaseAlert from "../components/BaseAlert";

export default function Home() {
  return (
    <>
      <BaseAlert
        variant="INFO"
        title="Attention needed"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              necessitatibus nisi distinctio obcaecati animi commodi eligendi
              vel consequuntur suscipit dignissimos consequuntur suscipit
              dignissimos?"
      ></BaseAlert>

      <BaseAlert
        variant="DANGER"
        title="Attention needed"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              necessitatibus nisi distinctio obcaecati animi commodi eligendi
              vel consequuntur suscipit dignissimos consequuntur suscipit
              dignissimos?"
      ></BaseAlert>

      <BaseAlert
        variant="SUCCESS"
        title="Attention needed"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              necessitatibus nisi distinctio obcaecati animi commodi eligendi
              vel consequuntur suscipit dignissimos consequuntur suscipit
              dignissimos?"
      ></BaseAlert>

      <BaseAlert
        variant="WARNING"
        title="Attention needed"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              necessitatibus nisi distinctio obcaecati animi commodi eligendi
              vel consequuntur suscipit dignissimos consequuntur suscipit
              dignissimos?"
      ></BaseAlert>
    </>
  );
}
