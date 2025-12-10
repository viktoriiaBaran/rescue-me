mkdir "./src/features/$1/components/$2"
cd "./src/features/$1/components/$2"
cat << EOF > "$2.tsx"
interface $2Props {}

const $2 = ({}: $2Props) => {
  return null;
};

export default $2;
EOF
echo "export { default as $2 } from './$2/$2';" >> "../index.ts"
