import { NavLink } from "react-router";

interface LinkProps {
    to: string;
    label: string;
}

export default function Link(props: LinkProps) {
    return (
        <NavLink
            to={props.to}
            className="block text-center py-2 px-4 bg-gray-700 rounded-xl hover:bg-gray-600"
        >
            {props.label}
        </NavLink>
    );
}
