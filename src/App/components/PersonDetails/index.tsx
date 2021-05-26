import { useLocaleLiteral } from "App/hooks/useLocaleLiteral";
import { usePerson } from "nampi-use-api";
import { FormattedMessage } from "react-intl";
import { Heading } from "../Heading";
import { LoadingPlaceholder } from "../LoadingPlaceholder";
import { Pre } from "../Pre";

interface Props {
  idLocal: string;
}

export const PersonDetails = ({ idLocal }: Props) => {
  const getText = useLocaleLiteral();
  const { data } = usePerson({ idLocal });
  return data ? (
    <>
      <Heading>
        <FormattedMessage
          description="Person heading"
          defaultMessage="Person: {label}"
          values={{ label: getText(data.labels) }}
        />
      </Heading>
      <Pre className="mt-4">{data}</Pre>
    </>
  ) : (
    <LoadingPlaceholder />
  );
};
