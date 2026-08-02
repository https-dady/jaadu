import PropTypes from "prop-types";
import Card from "@/components/common/Card";

function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <Card className="max-w-md">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-green-500">
            JAADU
          </h1>

          <p className="mt-2 text-slate-400">
            Connect. Chat. Instantly.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-slate-400">
              {subtitle}
            </p>
          )}

        </div>

        {children}

      </Card>
    </div>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;