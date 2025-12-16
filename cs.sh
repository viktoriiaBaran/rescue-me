mkdir "./src/features/$1/screens/$2"
cd "./src/features/$1/screens/$2"
cat << EOF > "$2Screen.tsx"
import $2View from '../$2/$2View';

const $2Screen = ({ navigation }: $2ScreenProps) => {
  return <$2View />;
};

export default $2Screen;
EOF
cat << EOF > "$2View.tsx"
interface $2ViewProps {}

const $2View = ({}: $2ViewProps) => {
  return null;
};

export default $2View;
EOF
echo "export { default as $2Screen } from './$2/$2Screen';" >> "../index.ts"
